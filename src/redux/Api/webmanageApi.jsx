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
        url: '/faq',
        method: "GET",
      }),
      providesTags: ["videos"],
    }),

      getUser: builder.query({
        query: () => ({
          url: '/user/get-my-profile',
          method: "GET",
        }),
        providesTags: ["videos"],
      }),


      updateProfilee: builder.mutation({
        query: (data) => {
          return {
            url: "/normal-user/update-profile",
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["videos"],
      }),
    
  

      getprivecyConditions: builder.query({
        query: () => {
          return {
            url: "/manage/get-privacy-policy",
            method: "GET",
          };
        },
        providesTags: ["videos"],
      }),

      getLaw: builder.query({
        query: () => {
          return {
            url: "/manage/get-law-form",
            method: "GET",
          };
        },
        providesTags: ["videos"],
      }),


      getTermsContuct: builder.query({
        query: () => {
          return {
            url: "/manage/get-terms-conditions",
            method: "GET",
          };
        },
        providesTags: ["videos"],
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
        providesTags: ["videos"],
      }),

      getCategory: builder.query({
        query: () => {
          return {
            url: `/categories`,
            method: "GET",
          };
        },
        providesTags: ["videos"],
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
        providesTags: ["videos"],
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

} = faq;