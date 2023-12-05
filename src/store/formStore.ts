import { create } from "zustand";

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

export const useFormStore = create()((set) => ({
  name: "",
  emailAddress: "",
  phoneNumber: "",
  setName: (name: string) => set(() => ({ name })),
  setEmailAddress: (emailAddress: string) => set(() => ({ emailAddress })),
  setPhoneNumber: (phoneNumber: string) => set(() => ({ phoneNumber })),
}));
