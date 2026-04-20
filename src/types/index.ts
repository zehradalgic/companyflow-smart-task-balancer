/**
 * COMPANYFLOW - ORTAK VERİ STANDARTLARI (SÖZLEŞME)
 * Bu dosya frontend ve backend arasındaki ortak dili belirler.
 */

// 1. Kullanıcı Rolleri
export type UserRole = 'admin' | 'manager' | 'employee';

// 2. Kullanıcı Modeli
export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  companyName?: string; // Sadece admin kayıt olurken zorunlu
  avatarUrl?: string;
}

// 3. Görev Durumları
export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

// 4. Görev Modeli
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: string; // Kullanıcı (User) ID'si
  createdBy: string;  // Admin/Manager ID'si
  dueDate: string;
  createdAt: string;
}

// 5. Şirket Modeli
export interface Company {
  id: string;
  name: string;
  ownerId: string;
}