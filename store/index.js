export const state = () => ({
    customerData: {
        personal: {
            name: '',
            mail: '',
            identifier: '',
            phone: '',
        },
        address: {
            cep: '',
            street: '',
            addressNumber: '',
            neighborhood: '',
            city: '',
            state: '',
        },
        payment: {
            cardNumber: '',
            cardOwner: '',
            cardRegistrationNumber: '',
            expirationDate: '',
            securityCode: '',
        }
    }
});

export const mutations = {
    setPersonalInfo (state, payload) {
        state.customerData.personal.name = payload.name;
        state.customerData.personal.mail = payload.mail;
        state.customerData.personal.identifier= payload.identifier;
        state.customerData.personal.phone = payload.phone;
    },
    setAddress (state, payload) {
        state.customerData.address.cep = payload.cep;
        state.customerData.address.street = payload.street;
        state.customerData.address.addressNumber = payload.addressNumber;
        state.customerData.address.city = payload.city;
        state.customerData.address.state = payload.state;
    },
    setPayment (state, payload) {
        state.customerData.payment.cardNumber = payload.cardNumber;
        state.customerData.payment.cardOwner = payload.cardOwner;
        state.customerData.payment.cardRegistrationNumber = payload.cardRegistrationNumber;
        state.customerData.payment.expirationDate = payload.expirationDate;
        state.customerData.payment.securityCode = payload.securityCode;
    },
};

export const actions = {
    // Actions globais
};

export const getters = {
    // Getters globais
};
