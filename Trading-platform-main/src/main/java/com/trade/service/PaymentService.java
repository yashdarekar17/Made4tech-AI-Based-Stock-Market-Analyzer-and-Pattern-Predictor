package com.trade.service;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.trade.domain.PaymentMethod;
import com.trade.modal.PaymentOrder;
import com.trade.modal.User;
import com.trade.response.PaymentResponse;

public interface PaymentService {
    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean ProceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user, Long amount,Long orderId) throws RazorpayException;

    PaymentResponse createStripePaymentLink(User user, Long amount,Long orderId) throws StripeException;
}
