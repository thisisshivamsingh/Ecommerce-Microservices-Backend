import { Router } from "../index";
import productController from "../controllers/product.controller";
import { jwtAuthMiddleware } from "../middlewares/auth.middleware";

/** Instance of router. */
const router = Router();

/** This route is used to update product. */
router.patch(
  "/update/:id",
  jwtAuthMiddleware,
  productController.updateProductDetails
);

export default router;
