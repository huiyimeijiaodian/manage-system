//  渲染到左边导航栏的路由表
import slidebarRouter from "./slidebarRouter";
// 辅助性路由
import helpRouter from "./helpRouter";

export default [
  ...slidebarRouter,
  ...helpRouter
];
