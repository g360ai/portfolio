import React, { useState } from 'react';
import { Icon } from './Icons';
import { BrandLogo } from './BrandLogo';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (success: boolean) => void;
  currentPasswordHash?: string; // In a real app, this check happens on server
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLogin, currentPasswordHash }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState<'login' | 'forgot'>('login');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check against stored password (passed from App parent) or default 'g360'
    const validPassword = currentPasswordHash || 'g360';

    if (username === 'admin' && password === validPassword) {
      setError('');
      onLogin(true);
      setUsername('');
      setPassword('');
    } else {
      setError('Kullanıcı adı veya şifre hatalı!');
      onLogin(false);
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Mock logic
      setError('Şifre sıfırlama bağlantısı sistem yöneticisine (size) gönderildi.');
      setTimeout(() => {
          setView('login');
          setError('');
      }, 3000);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300 overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <Icon name="X" size={20} /> 
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="w-32 mb-4 text-white opacity-90">
            <BrandLogo />
          </div>
          <h2 className="text-xl font-semibold text-white tracking-tight">
              {view === 'login' ? 'Yönetim Paneli' : 'Şifremi Unuttum'}
          </h2>
          <p className="text-slate-400 text-sm text-center mt-2 px-4">
            {view === 'login' 
                ? 'Portfolyo içeriğini düzenlemek için yetkili girişi yapınız.' 
                : 'Sistem yöneticisi ile iletişime geçmek için e-posta adresinizi girin.'}
          </p>
        </div>

        {view === 'login' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Kullanıcı Adı</label>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                    <Icon name="User" size={18} />
                </div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="admin"
                />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Şifre</label>
                    <button type="button" onClick={() => setView('forgot')} className="text-xs text-cyan-500 hover:text-cyan-400 hover:underline">
                        Şifremi unuttum?
                    </button>
                </div>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                    <Icon name="Lock" size={18} />
                </div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="••••••••"
                />
                </div>
            </div>

            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs flex items-center gap-2 animate-in slide-in-from-top-1">
                <Icon name="Lock" size={14} />
                {error}
                </div>
            )}

            <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-900/20 transition-all duration-300 transform hover:scale-[1.02] mt-2 flex justify-center items-center gap-2"
            >
                Giriş Yap <Icon name="ChevronRight" size={16} />
            </button>
            </form>
        ) : (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">E-Posta Adresi</label>
                    <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                        <Icon name="Mail" size={18} />
                    </div>
                    <input
                        type="email"
                        required
                        className="block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                        placeholder="ornek@g360.com"
                    />
                    </div>
                </div>
                
                {error && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs text-center">
                        {error}
                    </div>
                )}

                <div className="flex gap-3 mt-4">
                    <button
                        type="button"
                        onClick={() => { setView('login'); setError(''); }}
                        className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-all"
                    >
                        Geri Dön
                    </button>
                    <button
                        type="submit"
                        className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl shadow-lg transition-all"
                    >
                        Sıfırla
                    </button>
                </div>
            </form>
        )}
      </div>
    </div>
  );
};