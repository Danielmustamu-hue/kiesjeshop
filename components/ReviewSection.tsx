import React from 'react';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import { MOCK_REVIEWS } from '../constants';

export const ReviewSection: React.FC = () => {
  // TODO: Zodra je een Google Bedrijfsprofiel hebt, plak je hier de "Vraag om reviews" link.
  // Tot die tijd kun je dit naar je contactpagina of een Google Form laten verwijzen.
  const GOOGLE_REVIEW_LINK = "https://g.page/r/jouw-google-link-hier/review"; 
  
  // Bereken gemiddelde score voor de 'widget' look
  const averageScore = 4.8;
  const totalReviews = 142; // Fictief getal om autoriteit uit te stralen ('Social Proof')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-green-200">
           <ShieldCheck className="w-4 h-4" />
           <span>100% Onafhankelijk</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Wat anderen zeggen
        </h2>
        <p className="text-lg text-slate-600">
          Wij helpen dagelijks duizenden mensen met kiezen.
        </p>
      </div>

      {/* Google Style Widget Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Widget Header (The "Official" Look) */}
        <div className="bg-slate-50 border-b border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                {/* Google 'G' Logo SVG */}
                <div className="bg-white p-3 rounded-full shadow-sm border border-slate-200">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-xl text-slate-900">Uitstekend</span>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-slate-500">
                        Gebaseerd op <strong>{totalReviews} reviews</strong>
                    </p>
                </div>
            </div>

            <a 
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md active:scale-95 flex items-center gap-2"
            >
                Schrijf een review
                <ExternalLink className="w-4 h-4" />
            </a>
        </div>

        {/* Reviews Grid */}
        <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_REVIEWS.map((review) => (
                <div key={review.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow relative">
                    {/* Google G watermark */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 absolute top-6 right-6 opacity-20 grayscale" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                         {/* Simplified path for watermark */}
                    </svg>

                    <div className="flex items-center gap-3 mb-4">
                        {/* Avatar generator based on name */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${
                            review.rating >= 5 ? 'bg-green-500' : 'bg-blue-500'
                        }`}>
                            {review.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                            <p className="text-xs text-slate-500">{review.date}</p>
                        </div>
                    </div>

                    <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                             <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                             />
                        ))}
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        "{review.text}"
                    </p>
                    
                    <div className="text-xs font-semibold text-indigo-600 bg-indigo-50 inline-block px-2 py-1 rounded">
                        Over: {review.shopId === 'bol' ? 'Bol.com' : review.shopId === 'coolblue' ? 'Coolblue' : 'Amazon'}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};