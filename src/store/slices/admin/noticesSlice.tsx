import http from "@/services/http/baseUrl";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Notice {
    id: number;
    title: string;
    content: string;
    recipients?: string[];
    send_email: boolean;
}

export interface NoticeCreate {
    title: string;
    content: string;
    recipients?: string[];
    send_email: boolean;
}

export interface NoticeUpdate {
    title?: string;
    content?: string;
    recipients?: string[];
    send_email?: boolean;
}

interface NoticeState {
    notices: Notice[];
    loading: boolean;
    error: string | null;
    selectedNotice: Notice | null;
}

const initialState: NoticeState = {
    notices: [],
    loading: false,
    error: null,
    selectedNotice: null,
};


// 🟢 CREATE
export const createNotice = createAsyncThunk(
    "notices/createNotice",
    async (payload: NoticeCreate, { rejectWithValue }) => {
        try {
            const { data } = await http.post(`/admin/notices`, payload);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to create notice");
        }
    }
);

// 🔵 READ ALL
export const fetchNotices = createAsyncThunk(
    "notices/fetchNotices",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await http.get(`/admin/notices`);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to fetch notices");
        }
    }
);



// 🔵 READ BY ID
export const fetchNoticeById = createAsyncThunk(
    "notices/fetchNoticeById",
    async (id: number, { rejectWithValue }) => {
        try {
            const { data } = await http.get(`/admin/notices/${id}`);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to fetch notice");
        }
    }
);

// 🟠 UPDATE
export const updateNotice = createAsyncThunk(
    "notices/updateNotice",
    async ({ id, payload }: { id: number; payload: NoticeUpdate }, { rejectWithValue }) => {
        try {
            const { data } = await http.put(`/admin/notices/${id}`, payload);
            return data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to update notice");
        }
    }
);

// 🔴 DELETE
export const deleteNotice = createAsyncThunk(
    "notices/deleteNotice",
    async (id: number, { rejectWithValue }) => {
        try {
            await http.delete(`/admin/notices/${id}`);
            return id;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to delete notice");
        }
    }
);

const noticeSlice = createSlice({
    name: "notices",
    initialState,
    reducers: {
        clearSelectedNotice(state) {
            state.selectedNotice = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // CREATE
            .addCase(createNotice.pending, (state) => {
                state.loading = true;
            })
            .addCase(createNotice.fulfilled, (state, action: PayloadAction<Notice>) => {
                state.loading = false;
                state.notices.unshift(action.payload);
            })
            .addCase(createNotice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // READ ALL
            .addCase(fetchNotices.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotices.fulfilled, (state, action: PayloadAction<Notice[]>) => {
                state.loading = false;
                state.notices = action.payload;
            })
            .addCase(fetchNotices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // READ BY ID
            .addCase(fetchNoticeById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNoticeById.fulfilled, (state, action: PayloadAction<Notice>) => {
                state.loading = false;
                state.selectedNotice = action.payload;
            })
            .addCase(fetchNoticeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // UPDATE
            .addCase(updateNotice.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateNotice.fulfilled, (state, action: PayloadAction<Notice>) => {
                state.loading = false;
                const idx = state.notices.findIndex((n) => n.id === action.payload.id);
                if (idx !== -1) state.notices[idx] = action.payload;
                if (state.selectedNotice?.id === action.payload.id) state.selectedNotice = action.payload;
            })
            .addCase(updateNotice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // DELETE
            .addCase(deleteNotice.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteNotice.fulfilled, (state, action: PayloadAction<number>) => {
                state.loading = false;
                state.notices = state.notices.filter((n) => n.id !== action.payload);
            })
            .addCase(deleteNotice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearSelectedNotice } = noticeSlice.actions;
export default noticeSlice.reducer;
