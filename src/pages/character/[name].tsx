import { GetServerSidePropsContext } from "next";

export { default } from "@/views/character-details-page/character-details-page";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      name: ctx.params?.name,
    },
  };
}
