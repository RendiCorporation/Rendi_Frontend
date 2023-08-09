import { usersApi } from "../api";
import { useInputContext } from "./inputContext";

// 사용자 이름 중복 확인
export async function onUsernameVerification(inputIDValue: string) {
  try {
    const checkIDResponse = await usersApi.checkID(inputIDValue);

    console.log(checkIDResponse);

    if (checkIDResponse.success) {
      console.log("중복확인 완료!");
    }
  } catch (error) {
    console.log("중복확인 오류:", error);
  }
}

// 이메일 인증 코드 요청( 이메일 전송 )
export async function onEmailVerification(
  inputNameValue: string,
  inputEmailValue: string
) {
  try {
    const EmailVeriResponse = await usersApi.emailVerification({
      name: inputNameValue,
      email: inputEmailValue,
    });
7
    console.log(EmailVeriResponse);

    if (EmailVeriResponse.success) {
      const responseData = EmailVeriResponse.response;
      const regex = /인증코드: ([a-zA-Z0-9]+)/;
      const match = responseData.message.match(regex);

      console.log(match);

      if (match) {
        const backendVeriCode = match[1];
        console.log("받은 인증코드:", backendVeriCode);

        return backendVeriCode;
      }
    } else {
      console.log("이메일 인증 요청 실패:", EmailVeriResponse.data.error);
      return false;
    }
  } catch (error) {
    console.log("이메일 인증 오류: ", error);
    return false;
  }
}

// 인증 코드 검증
export function onAuthCodeVerification(
  inputAuthCodeValue: string,
  backendVeriCode: string
) {
  if (inputAuthCodeValue === backendVeriCode) {
    console.log("인증코드 검증 성공!");
    return true;
  } else {
    console.log("인증코드 검증 실패: 잘못된 인증 코드");
    return false;
  }
}
