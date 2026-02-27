import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Menu = {
  id: string;
  title: string;
  price: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
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
