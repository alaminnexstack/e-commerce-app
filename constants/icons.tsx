import { Ionicons } from "@expo/vector-icons";

export const icon: any = {
  index: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),
  explore: ({ color }: { color: string }) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),
  notifications: ({ color }: { color: string }) => (
    <Ionicons name="notifications-outline" size={22} color={color} />
  ),
  cart: ({ color }: { color: string }) => (
    <Ionicons name="cart-outline" size={22} color={color} />
  ),
  profile: ({ color }: { color: string }) => (
    <Ionicons name="person-outline" size={22} color={color} />
  ),
  "product/[productId]": ({ color }: { color: string }) => (
    <Ionicons name="arrow-back-outline" size={22} color={color} />
  ),
};
