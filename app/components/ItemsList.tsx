'use client';

import { Item } from '@/app/data/items';
import ItemCard from './ItemCard';

interface ItemsListProps {
  items: Item[];
  onPurchase: (item: Item) => void;
}

export default function ItemsList({ items, onPurchase }: ItemsListProps) {
  const handleCloseApp = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close(); // Cierra la Mini App y vuelve a Telegram
    } else {
      alert("Esta funcionalidad solo funciona dentro de Telegram.");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Available Items</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <ItemCard 
            key={item.id}
            item={item}
            onPurchase={onPurchase}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCloseApp}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          Cerrar Mini App
        </button>
      </div>
    </div>
  );
}
