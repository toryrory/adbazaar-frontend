import { createSlice } from "@reduxjs/toolkit";
import { Seller1, Seller2, Seller3, Seller4, } from "../../public/png";
import { Simenon, HarryPotter, Shakespeare, Sheldon, Coelho, Tolkien } from "../../public/png/authors";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    showStars: true,
    subscription: false,
    bookSellers: [
      {
        id: 1,
        photo: Seller1,
        name: "Karl Amadeus",
        rating: 4,
        reviews: 12,
        comment:
          "I recently had the pleasure of purchasing books from Karl, and I must say that his op",
      },
      {
        id: 2,
        photo: Seller2,
        name: "Klara Larsson",
        rating: 3.5,
        reviews: 10,
        comment:
          "I recently had the pleasure of purchasing books from Clara, and I must say that her op",
      },
      {
        id: 3,
        photo: Seller3,
        name: "Andriy",
        rating: 3,
        reviews: 8,
        comment:
          "Great seller of books! Books are in excellent condition, like new! Ordered 2 books for",
      },
      {
        id: 4,
        photo: Seller4,
        name: "Luiza Levinsky",
        rating: 4.5,
        reviews: 18,
        comment:
          "Great seller of books! Books are in excellent condition, like new! Ordered 5 books for",
      },
    ],
    popularAuthors: [
      {
        id: 1,
        photo: Simenon,
        name: "G. Simenon",
        works: "200 tabloid novels",
        series: "425 books",
      },
      {
        id: 2,
        photo: HarryPotter,
        name: "Harry Potter",
        works: "J.K. Rowling",
        series: "7 book series",
      },
      {
        id: 3,
        photo: Sheldon,
        name: "S. Sheldon",
        works: "469 novels",
        series: "29 book series",
      },
      {
        id: 4,
        photo: Tolkien,
        name: "J.R.R.Tolkien",
        works: "37 books",
        series: "63 articles",
      },
      {
        id: 5,
        photo: Coelho,
        name: "Paulo Coelho",
        works: "16 novels",
        series: "7 series of short stories-parables",
      },
      {
        id: 6,
        photo: Shakespeare,
        name: "W. Shakespeare",
        works: "38 plays",
        series: "154 sonnets",
      },
    ],
  },
  reducers: {
    changeStarVisibility: {
      reducer(state, action) {
        state.showStars = action.payload;
      },
    },
    changeSubscription: {
      reducer(state, action) {
        state.subscription = action.payload;
      },
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(getTopBooksellers.fullfilled, (state, { payload }) => {
  //     state.booksellers = payload
  //   })
  // }
});
export const { changeStarVisibility, changeSubscription } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
