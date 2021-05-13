# DreamTree-Back-end
🌳 DreamTree 🌳 백엔드 파트 Repo 입니다.

## **💬 Language**

`Javascript`

## **🔎 Architecture**

`Restful API`

## **🛠️ Technical Stack**

`Node.js` `Express` `mongoDB` `naverMaps-api-Geocoding`

## 💻 **APIs**

### 1. 꿈나무 카드 가맹점 전체 조회 쿼리

index router를 통해 마포구에 있는 가게들의 전체 데이터를 받아옵니다. 공공데이터 '꿈나무카드가맹점 현황'과 naver-Maps-Geocoding으로 데이터 생성

### Request format

- URL : [https://dreamtree-dywzy.run.goorm.io/](https://dreamtree-dywzy.run.goorm.io/)
- Method: **GET**
---
### 2. 위경도 기반 주변 가맹점 정보 쿼리

위치 정보 (위도, 경도, 거리)를 전달하여 현재 위치로부터 거리 안에 있는 모든 가게 들 중 가까운 가게부터 데이터를 받아옵니다.  

### Request format

- URL : [https://dreamtree-dywzy.run.goorm.io/](https://dreamtree-dywzy.run.goorm.io/)location?latitude={latitude}&logitude={logitude}&distance={distance}
- Method: **GET**
- distance : m단위입니다.
---
### 3. 키워드(업체명) 검색 기반 가맹점 정보 쿼리

업체명 중 일부를 쿼리 파라미터로 전달하여 가맹점 정보를 받아옵니다(검색 기능).

### Request format

- URL : [https://dreamtree-dywzy.run.goorm.io/](https://dreamtree-dywzy.run.goorm.io/)keyword?storename={storename}
- Method: **GET**
- storename : 가게 이름 중에 일부를 입력
---
