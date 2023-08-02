import express from 'express'
import { Login, Logout, Signup } from '../controllers/auth.controller';
import { jwtAuthorisation, sessionManagement, validationMiddleware } from '../middleware/authmiddleware';
import { loginSchema } from '../constants/validation.schema';
import { AddAddress, EditAddress } from '../controllers/address.controller';
import { AddProduct, PlaceBid, RemoveProduct, ViewProduct } from '../controllers/product.controller';
import { EditUserDetails } from '../controllers/user.controller';

export const router=express.Router();

router.post('/login', validationMiddleware(loginSchema) ,Login);

router.post('/signup',Signup ); 

router.get('/logout',jwtAuthorisation, sessionManagement, Logout )

router.post('/address',jwtAuthorisation,sessionManagement,AddAddress);

router.patch('/address',jwtAuthorisation,sessionManagement, EditAddress) 

router.patch('/user',jwtAuthorisation,sessionManagement, EditUserDetails )

router.post('/product',jwtAuthorisation,sessionManagement,AddProduct)  

router.delete('/product',jwtAuthorisation,sessionManagement,RemoveProduct)

router.get('/product-details/:id',jwtAuthorisation,sessionManagement,ViewProduct);

router.post('/place-bid',jwtAuthorisation,sessionManagement,PlaceBid)