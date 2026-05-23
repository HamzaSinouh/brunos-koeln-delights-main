export const getReviews = async () => {
  return {
    rating: 4.7,
    total: 155,
    reviews: [
      {
        author: "katharina ries",
        rating: 5,
        text: "Wir waren zum ersten Mal hier. Getränke kamen sehr schnell. Das Essen wurde frisch zubereitet und dauerte daher ein wenig. Es war super lecker. Top Preis Leistung. Restaurant und Toiletten sehr sauber. Wir kommen definitiv wieder.",
        relativeTime: "vor 7 Monaten",
      },
      {
        author: "Edith Müller-Hofmann",
        rating: 5,
        text: "Wir wohnen westlich von Köln und kommen immer gerne zu Bruno und seiner Frau. In der Kneipe gehört man auch bei den Stammgästen schnell dazu und wir werden immer herzlich begrüßt. Unser Lieblingsgericht ist das Bauernomlette mit Salat. Bruno weiß schon genau was wir mögen. Alles wird frisch gekocht und das schmeckt man einfach.",
        relativeTime: "vor 5 Monaten",
      },
      {
        author: "daniel klemm",
        rating: 5,
        text: "Tolle Kneipe mit leckerem Essen, super Getränken und einem sehr herzlichen Kneiper. Preis Leistung 10/10. Sehr zu empfehlen.",
        relativeTime: "vor 6 Monaten",
      },
      {
        author: "mood4food by Christina",
        rating: 5,
        text: "We were in Cologne for three days and living next door from Bei Bruno. We were impressed by the simplicity, authenticity and quality of the food.",
        relativeTime: "vor 2 Jahren",
      },
    ],
    error: null,
  };
};