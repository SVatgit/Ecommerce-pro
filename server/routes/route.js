import express from 'express';
import { userLogIn, userSignUp ,} from '../controller/user-controller.js';
import { getProducts ,getProductById} from '../controller/product-controller.js';
import { addPaymentGateway } from '../controller/payment-controller.js';


const router = express.Router();
router.post('/signup',userSignUp);
router.post('/login',userLogIn);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
router.post('/payment',addPaymentGateway);

export default router;
