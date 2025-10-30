// features/countries/countriesSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountriesState } from "../../../types/country";
import http from "@/services/http/baseUrl";

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountryNames = createAsyncThunk(
  "countries/fetchCountryNames",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await http.get("/admin/countries", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countryList = response.data.countries.map(
        (country: any) => country
      );
      console.log("Returning countryList", countryList);
      return countryList;
    } catch (err) {
      console.log(err);

      return rejectWithValue("Failed to fetch country names");
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryNames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryNames.fulfilled, (state, action) => {
        state.loading = false;
        console.log("ation.payload", action.payload);
        state.countries = action.payload || [];
      })
      .addCase(fetchCountryNames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default countriesSlice.reducer;
