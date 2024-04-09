export const state = () => ({
    customerData: {
        name: "",
        mail: "",
        identifier: "",
        phone: "",
    },
    customerPlan: {}
});

export const mutations = {
    registerCustomer(state, payload) {
        state.customerData.name = payload.name
        state.customerData.mail = payload.mail
        state.customerData.identifier= payload.identifier
        state.customerData.phone = payload.phone
    }
};

export const actions = {
    // Actions globais
};

export const getters = {
    // Getters globais
};
