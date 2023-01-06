import { defineStore } from 'pinia'
export interface userInterface {
    userId: string,
    userName: string,
    email: string,
    photoUrl: string,
    phonNumber: string,
}
export default defineStore("mainStore", {
    state: () => ({
        user: {
            userId: "",
            userName: "",
            email: "",
            photoUrl: "",
            phonNumber: "",
        },
        isLogedIn: false,
        isLoginModalOpen: false,
    }),
    actions: {
        setUser(user:userInterface) { this.user = user },
        logedIn() { this.isLogedIn = true },
        logedOut() { this.isLogedIn = false },
        openLoginModal() { this.isLoginModalOpen = true },
        closeLoginModal() { this.isLoginModalOpen = false },
        setUserName(userName: string) { this.user.userName = userName },
    },
    getters: {
        getUser(state){return state.user},
        getLoginModal(state) { return state.isLoginModalOpen },
    }
})
