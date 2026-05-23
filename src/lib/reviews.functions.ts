export const getReviews = async () => {
  return {
    rating: 4.7,
    total: 155,
    reviews: [
      {
        author: "Katharina",
        rating: 5,
        text: "Super leckeres Essen und tolle Atmosphäre.",
        relativeTime: "vor 7 Monaten",
      },
      {
        author: "Edith",
        rating: 5,
        text: "Wir kommen immer wieder gerne.",
        relativeTime: "vor 5 Monaten",
      },
    ],
    error: null,
  };
};