import { GetServerSidePropsContext } from "next";

export { default } from "@/views/post-details-page/post-details-page";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      slug: ctx.params?.slug,
    },
  };
}
