import supabase from "./supabase";

export async function getTours() {
  const { data, error } = await supabase.from("tours").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tour trips could not be loaded");
  }

  return data;
}
