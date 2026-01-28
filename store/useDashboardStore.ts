import { create } from 'zustand';

export interface Notification {
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
}

interface DashboardState {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    notifications: Notification[];
    addNotification: (type: Notification['type'], message: string) => void;
    removeNotification: (id: string) => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    notifications: [],
    addNotification: (type, message) => {
        const id = Math.random().toString(36).substring(7);
        set((state) => ({
            notifications: [...state.notifications, { id, type, message }],
        }));
        // Auto-dismiss
        setTimeout(() => {
            set((state) => ({
                notifications: state.notifications.filter((n) => n.id !== id),
            }));
        }, 5000);
    },
    removeNotification: (id) =>
        set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
        })),

    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
}));
