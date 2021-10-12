import responseJson from "./rakutenApi.json";

// 楽天APIのアプリケーションID
const rakutenApplicationId = "1031747533080550286";
// リクエストに使用するURLを生成
export const getRakutenApiRequestURL = (title: string) => {
  const noConditionURL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&size=9&booksGenreId=001&sort=-releaseDate&applicationId=${rakutenApplicationId}`;
  return encodeURI(`${noConditionURL}&title=${title}`);
};
// 楽天APIからのレスポンスの型
export type rakutenApiResType = typeof responseJson;
