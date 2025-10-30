import http from '@/services/http/baseUrl';
import { EmailRequest, SupportTicket, TicketAssign, TicketCreateData, TicketsState, TicketStatusUpdate } from '@/types/supportTickets';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: TicketsState = {
    tickets: [],
    userTickets: [],
    currentTicket: null,
    loading: false,
    error: null,
};

// Async Thunks
export const createTicket = createAsyncThunk(
    'tickets/createTicket',
    async (ticketData: TicketCreateData, { rejectWithValue }) => {
        try {
            const response = await http.post('/tickets/', ticketData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create ticket');
        }
    }
);

export const fetchAllTickets = createAsyncThunk(
    'tickets/fetchAllTickets',
    async (_, { rejectWithValue }) => {
        try {
            const response = await http.get('/tickets/');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch tickets');
        }
    }
);

export const fetchUserTickets = createAsyncThunk(
    'tickets/fetchUserTickets',
    async (_, { rejectWithValue }) => {
        try {
            const response = await http.get(`/tickets/user`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch user tickets');
        }
    }
);

export const fetchTicket = createAsyncThunk(
    'tickets/fetchTicket',
    async (ticketId: number, { rejectWithValue }) => {
        try {
            const response = await http.get(`/tickets/${ticketId}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch ticket');
        }
    }
);

export const updateTicketStatus = createAsyncThunk(
    'tickets/updateTicketStatus',
    async ({ ticketId, status }: { ticketId: number; status: TicketStatusUpdate }, { rejectWithValue }) => {
        try {
            const response = await http.patch(`/tickets/${ticketId}/status`, status);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to update ticket status');
        }
    }
);

export const assignTicket = createAsyncThunk(
    'tickets/assignTicket',
    async ({ ticketId, handledBy }: { ticketId: number; handledBy: TicketAssign }, { rejectWithValue }) => {
        try {
            const response = await http.patch(`/tickets/${ticketId}/assign`, handledBy);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to assign ticket');
        }
    }
);

export const sendTicketReply = createAsyncThunk(
    'tickets/sendTicketReply',
    async ({ ticketId, emailRequest }: { ticketId: number; emailRequest: EmailRequest }, { rejectWithValue }) => {
        try {
            const response = await http.post(`/tickets/${ticketId}/send-reply`, emailRequest);
            return { ticketId, data: response.data };
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to send reply');
        }
    }
);

export const sendStatusNotification = createAsyncThunk(
    'tickets/sendStatusNotification',
    async (ticketId: number, { rejectWithValue }) => {
        try {
            const response = await http.post(`/tickets/${ticketId}/status-notification`);
            return { ticketId, data: response.data };
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to send status notification');
        }
    }
);

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        clearCurrentTicket(state) {
            state.currentTicket = null;
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create Ticket
            .addCase(createTicket.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTicket.fulfilled, (state, action: PayloadAction<SupportTicket>) => {
                state.loading = false;
                state.tickets.push(action.payload);
                state.userTickets.push(action.payload);
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Fetch All Tickets
            .addCase(fetchAllTickets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllTickets.fulfilled, (state, action: PayloadAction<SupportTicket[]>) => {
                state.loading = false;
                state.tickets = action.payload;
            })
            .addCase(fetchAllTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Fetch User Tickets
            .addCase(fetchUserTickets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserTickets.fulfilled, (state, action: PayloadAction<SupportTicket[]>) => {
                state.loading = false;
                state.userTickets = action.payload;
            })
            .addCase(fetchUserTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Fetch Single Ticket
            .addCase(fetchTicket.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTicket.fulfilled, (state, action: PayloadAction<SupportTicket>) => {
                state.loading = false;
                state.currentTicket = action.payload;
            })
            .addCase(fetchTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Update Ticket Status
            .addCase(updateTicketStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTicketStatus.fulfilled, (state, action: PayloadAction<SupportTicket>) => {
                state.loading = false;
                state.tickets = state.tickets.map(ticket =>
                    ticket.id === action.payload.id ? action.payload : ticket
                );
                state.userTickets = state.userTickets.map(ticket =>
                    ticket.id === action.payload.id ? action.payload : ticket
                );
                if (state.currentTicket?.id === action.payload.id) {
                    state.currentTicket = action.payload;
                }
            })
            .addCase(updateTicketStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Assign Ticket
            .addCase(assignTicket.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(assignTicket.fulfilled, (state, action: PayloadAction<SupportTicket>) => {
                state.loading = false;
                state.tickets = state.tickets.map(ticket =>
                    ticket.id === action.payload.id ? action.payload : ticket
                );
                if (state.currentTicket?.id === action.payload.id) {
                    state.currentTicket = action.payload;
                }
            })
            .addCase(assignTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Send Ticket Reply
            .addCase(sendTicketReply.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendTicketReply.fulfilled, (state) => {
                state.loading = false;
                // You might want to update the ticket with the thread link here
            })
            .addCase(sendTicketReply.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Send Status Notification
            .addCase(sendStatusNotification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendStatusNotification.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(sendStatusNotification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default ticketsSlice.reducer;