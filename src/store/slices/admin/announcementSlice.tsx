import http from "@/services/http/baseUrl";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export interface Announcement {
    id: number;
    title: string;
    content: string;
    created_at?: string;
}

interface AnnouncementState {
    data: Announcement[];
    loading: boolean;
    error: string | null;
}

const initialState: AnnouncementState = {
    data: [],
    loading: false,
    error: null,
};

const API_URL = `/admin/announcements`;

/* --------------------------- Async Thunks --------------------------- */

// Fetch all announcements
export const fetchAnnouncements = createAsyncThunk(
    "announcements/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await http.get(API_URL);
            return res.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to fetch announcements");
        }
    }
);

// Add new announcement
export const addAnnouncement = createAsyncThunk(
    "announcements/add",
    async (payload: { title: string; content: string }, { rejectWithValue }) => {
        try {
            const res = await http.post(API_URL, payload);
            return res.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to add announcement");
        }
    }
);

// Update announcement
export const updateAnnouncement = createAsyncThunk(
    "announcements/update",
    async (
        payload: { id: number; title: string; content: string },
        { rejectWithValue }
    ) => {
        try {
            const res = await http.put(`${API_URL}/${payload.id}`, {
                title: payload.title,
                content: payload.content,
            });
            return res.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to update announcement");
        }
    }
);

// Delete announcement
export const deleteAnnouncement = createAsyncThunk(
    "announcements/delete",
    async (id: number, { rejectWithValue }) => {
        try {
            await http.delete(`${API_URL}/${id}`);
            return id;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.detail || "Failed to delete announcement");
        }
    }
);

/* --------------------------- Slice Definition --------------------------- */

const announcementSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchAnnouncements.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnnouncements.fulfilled, (state, action: PayloadAction<Announcement[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAnnouncements.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Add
            .addCase(addAnnouncement.fulfilled, (state, action: PayloadAction<Announcement>) => {
                state.data.unshift(action.payload);
            })

            // Update
            .addCase(updateAnnouncement.fulfilled, (state, action: PayloadAction<Announcement>) => {
                const index = state.data.findIndex((a) => a.id === action.payload.id);
                if (index !== -1) state.data[index] = action.payload;
            })

            // Delete
            .addCase(deleteAnnouncement.fulfilled, (state, action: PayloadAction<number>) => {
                state.data = state.data.filter((a) => a.id !== action.payload);
            });
    },
});

export default announcementSlice.reducer;
