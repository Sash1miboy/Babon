import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Babon");

    try {
        const res = await axios.post("https://api.cloudinary/v1_1/dlz9affpa/image/upload", data)
        const {url} = res.data;
        return url;
    } catch (err) {
        console.log(err);
    }
};

export default upload;