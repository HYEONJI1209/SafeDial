import api from "./api/auth";

export const RegisServices = async (formData) => {
    console.log("📦 보낼 데이터:", formData);
    try {

        const response = await api.post("/register", formData);

        return response.data;
    } catch (error) {
        console.error("❌ 등록 실패:", error.response?.data || error.message);
        throw error;
    }
};
