const database = require("../Model");
const signUp = database.RegisterDB;
const bcrypt = require('bcrypt');
const QRCode = require('qrcode');  // QRCode 라이브러리 추가
const fs = require('fs');
const path = require('path');

// 랜덤 전화번호 생성 함수
const generateRandomPhone = () => {
    const randomNumber = Math.floor(Math.random() * 1000000000);  // 랜덤 10자리 숫자 생성
    return `080${randomNumber.toString().padStart(8, '0')}`;  // 랜덤 번호 생성
};

const SignUpController = async (req, res) => {
    console.log(req.body);
    
    const formData = {
        name: req.body.name,
        phone: req.body.phone,  // 실제 전화번호를 DB에 저장
        secondPhone: req.body.secondPhone,
        carNumber: req.body.carNumber
    }

    signUp.create(formData)
    .then(async (data) => {
        if (data != null) {
            const carNumber = data.carNumber;  // 차량 번호
            const randomPhone = generateRandomPhone();  // 랜덤 전화번호 생성
            const RealPhone = data.phone;  // 실제 전화번호
            const qrCodeData = `tel:${RealPhone}`;  // QR 코드에서 랜덤 번호 표시

            // 업로드 경로 지정 (uploads/차량번호/)
            const folderPath = path.join(__dirname, '..', 'uploads', carNumber);
            
            // 차량 번호 폴더가 없으면 생성
            try {
                await fs.promises.mkdir(folderPath, { recursive: true });
            } catch (err) {
                return res.status(500).send({ message: '폴더 생성 중 오류 발생' });
            }

            // QR코드를 파일로 저장할 경로
            const qrFilePath = path.join(folderPath, `${carNumber}_qr.png`);

            // QR코드를 이미지 파일로 저장
            QRCode.toFile(qrFilePath, qrCodeData, (err) => {
                if (err) {
                    return res.status(500).send({ message: 'QR 코드 생성 중 오류 발생' });
                }

                // 저장된 QR코드 파일 경로를 응답에 포함
                res.send({ 
                    data: data, 
                    message: "SUCCESS", 
                    qrFilePath: `/uploads/${carNumber}/${carNumber}_qr.png`,  // 클라이언트에서 접근할 수 있는 경로
                    actualPhone: RealPhone  // 실제 전화번호도 응답으로 보내기
                });
            });
        }
    })
    .catch(err => {
        res.status(500).send({ message: '회원가입 중 오류 발생', error: err });
    });
};

module.exports = { SignUpController };
