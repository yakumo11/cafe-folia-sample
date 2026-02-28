import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// src/library/microcms.ts

export type Menu = {
  id: string;
  title: string;
  content: string; // もし管理画面で「内容」がある場合
  price: string;
  image: {
    url: string;
  };
  category: string[]; // ← これを追加！(セレクト形式は配列で返ってくる仕様のため)
};

export type ShopInfo = {
  id: string;
  address: string;
  business_hours: string;
  phone: string;
  concept_title: string;
  concept_text: string;
  Maps_embed?: string;
};

export const getShopInfo = async () => {
  return microcmsClient.getObject<ShopInfo>({
    endpoint: 'shop_info',
  });
};

export type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string; // microCMSが自動で付与する日付
};