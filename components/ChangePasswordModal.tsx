import React, { useState } from 'react';
import { Icon } from './Icons';
import { BrandLogo } from './BrandLogo';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChangePassword: (newPassword: string) => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose, onChangePassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 4) {
        setError('Şifre en az 4 karakter olmalıdır.');
        return;
    }
    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor!');
      return;
    }
    onChangePassword(newPassword);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white">
          <Icon name="X" size={20} />
        </button>

        <div className="text-center mb-6">
            <div className="inline-flex p-3 bg-cyan-500/10 rounded-full mb-3 text-cyan-400">
                <Icon name="LockKeyhole" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white">Şifre Değiştir</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Yeni Şifre</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Yeni şifreniz"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Şifre Tekrar</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Yeni şifreniz tekrar"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 p-2 rounded border border-red-500/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-all mt-2 shadow-lg"
          >
            Şifreyi Güncelle
          </button>
        </form>
      </div>
    </div>
  );
};