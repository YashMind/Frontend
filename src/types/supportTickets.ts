import { UserProfileData } from "./authType";

export interface SupportTicket {
    id: number;
    subject: string;
    message: string;
    user: UserProfileData;
    status: 'pending' | 'Invalid' | 'resolved' | 'in process' | 'issue/bug';
    handled_by: string | null;
    created_at: string;
    reverted_at: string | null;
    thread_link: string | null;
}

export interface EmailRequest {
    subject: string;
    message: string;
    recipients: string[];
}

export interface TicketCreateData {
    subject: string;
    message: string;
    user_email: string;
}

export interface TicketStatusUpdate {
    status: 'pending' | 'Invalid' | 'resolved' | 'in process' | 'issue/bug';
}

export interface TicketAssign {
    handled_by: string;
}

export interface TicketsState {
    tickets: SupportTicket[];
    userTickets: SupportTicket[];
    currentTicket: SupportTicket | null;
    loading: boolean;
    error: string | null;
}