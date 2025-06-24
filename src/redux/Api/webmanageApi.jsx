import { baseApi } from "./baseApi";

const faq = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /** Setting APIs */

    getAbout: builder.query({
      query: ({ page }) => {
        return {
          url: `/info?page=${page}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllFaq: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
      providesTags: ["updateProfile"],
    }),

    getUser: builder.query({
      query: () => ({
        url: "/user/get-my-profile",
        method: "GET",
      }),
      providesTags: ["updateProfile"],
    }),

    updateProfilee: builder.mutation({
      query: (data) => {
        return {
          url: "/normal-user/update-profile",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getprivecyConditions: builder.query({
      query: () => {
        return {
          url: "/manage/get-privacy-policy",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getLaw: builder.query({
      query: () => {
        return {
          url: "/manage/get-law-form",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getTermsContuct: builder.query({
      query: () => {
        return {
          url: "/manage/get-terms-conditions",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    postFeedback: builder.mutation({
      query: (data) => {
        return {
          url: "/feedback/create-feedback",
          method: "POST",
          body: data,
        };
      },
    }),

    getNotification: builder.query({
      query: () => {
        return {
          url: "/notification/get-notifications",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getCategory: builder.query({
      query: () => {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getMyOrder: builder.query({
      query: () => {
        return {
          url: `/orders`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getMyCustomOrder: builder.query({
      query: () => {
        return {
          url: `/orders?type=custom`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addContact: builder.mutation({
      query: (data) => {
        return {
          url: "/contact",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllCategory: builder.query({
      query: (id) => {
        return {
          url: `/categories/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addOrderCustom: builder.mutation({
      query: (data) => {
        return {
          url: "/orders/custom",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    addAppointment: builder.mutation({
      query: (data) => {
        return {
          url: "/appointment",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getUnavailable: builder.query({
      query: ({ month, year }) => {
        return {
          url: `/appointment?month=${month}&year=${year}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addFavorite: builder.mutation({
      query: (data) => {
        return {
          url: "/products/favorites",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    addReview: builder.mutation({
      query: (data) => {
        return {
          url: "/products/review",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getFavorites: builder.query({
      query: () => {
        return {
          url: `/products/favorites`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getReview: builder.query({
      query: ({ id, page, limit, sort, rating }) => {
        return {
          url: `/products/review?product_id=${id}&page=${page}&limit=${limit}&sort=${sort}&rating=${rating}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),
    getReviewTotal: builder.query({
      query: (id) => {
        return {
          url: `/products/review?product_id=${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addOrderSubmit: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    getPopularProduct: builder.query({
      query: () => {
        return {
          url: `/products/popular`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),
    getAllProduct: builder.query({
      query: (params) => {
        return {
          url: `/products`,
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const {
  useGetAboutQuery,
  useGetUserQuery,
  useUpdateProfileeMutation,
  useGetAllFaqQuery,
  useGetprivecyConditionsQuery,
  useGetTermsContuctQuery,
  usePostFeedbackMutation,
  useGetNotificationQuery,
  useGetLawQuery,
  useGetCategoryQuery,
  useAddContactMutation,
  useGetMyOrderQuery,
  useGetMyCustomOrderQuery,
  useAddOrderCustomMutation,
  useGetUnavailableQuery,
  useAddAppointmentMutation,
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useAddReviewMutation,
  useGetReviewQuery,
  useGetReviewTotalQuery,
  useAddOrderSubmitMutation,
  useGetPopularProductQuery,
  useGetAllProductQuery,
} = faq;
