import helpRouter from "./helpRouter";
//  渲染到左边导航栏的路由表
import slidebarRouter from "./slidebarRouter";

console.log(slidebarRouter);
export default [
  ...slidebarRouter,
  ...helpRouter
];
