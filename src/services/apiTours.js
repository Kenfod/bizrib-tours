import supabase from "./supabase";

export async function getTours() {
  const { data, error } = await supabase.from("tours").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tour trips could not be loaded");
  }

  return data;
}

export async function createTour(newTour) {
  const { data, error } = await supabase
    .from("tours")
    .insert([newTour])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Tour trip could not be created");
  }

  return data;
}

export async function deleteTour(id) {
  const { data, error } = await supabase.from("tours").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Tour trip could not be deleted");
  }

  return data;
}
