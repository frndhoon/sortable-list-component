## Sortable List Component

> FrontendPro Challenge: [Sortable List Component](https://www.frontendpro.dev/frontend-coding-challenges/sortable-list-component-yfG6JlItkHMpWze4wacs)

- overflow-x/y-auto 활용
- ScrollArea 활용
- Map 활용
- Ref로 drag 인덱스 관리

## 배운 점
- 전체 화면 레이아웃 구성 시 div container 3개 정도 필요
  1. 전체 화면 레이아웃 (overflow-x/y-auto : 가로/세로 스크롤 가능)
  2. 페이지 컨테이너 (컨텐츠 컨테이너가 가운데 정렬될 수 있게 전체 화면 레이아웃과 연결점 역할)
  3. 컨텐츠 컨테이너 (세로/가로 중앙 정렬 및 최소 너비 지정) + 추후 다른 페이지에서 다른 className으로 사용 가능할 것으로 예상

![Image](https://private-user-images.githubusercontent.com/173776690/505741675-fa9f0fa0-cdb6-47e9-bab9-82c4e41f7405.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjE0OTM0NzcsIm5iZiI6MTc2MTQ5MzE3NywicGF0aCI6Ii8xNzM3NzY2OTAvNTA1NzQxNjc1LWZhOWYwZmEwLWNkYjYtNDdlOS1iYWI5LTgyYzRlNDFmNzQwNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyNlQxNTM5MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZDdjMzRkMDQzNjZiOGRiNmIyY2I0ZWJlYTQ4MGU3OWE1OTBhNjQyZDljYWJlOGVkZmNhZTk3MTg0OTNiZThkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.FQr2B8UDZAkY8g0G1ZBNByrCtmfGujG3zg9_jjAwWMk)

![Image](https://private-user-images.githubusercontent.com/173776690/505741769-ea06529d-b97a-456e-99f6-367f34d81201.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjE0OTM1NjYsIm5iZiI6MTc2MTQ5MzI2NiwicGF0aCI6Ii8xNzM3NzY2OTAvNTA1NzQxNzY5LWVhMDY1MjlkLWI5N2EtNDU2ZS05OWY2LTM2N2YzNGQ4MTIwMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyNlQxNTQxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMzBkNzI3MjUzZmU3ZWQyNmExYmZkYjk5ZTRiNjZkMGUzNTFlOGNmZDhlYzY1MWI0ZjBkM2U2ZWZiNDhjNTEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AmxAvYX6p0xFp_9mNugU8XAoECmI-keyshHPjC7iDk8)

- 특히, flex container 시, items-center, justify-center 사용 주의
  - 부모 container가 overflow-x/y-auto 일 때, 중앙 정렬돼있으면 왼쪽/위쪽 시작점이 보이지 않음 (부모 container 밖으로 밀려나게 됨)

## 추가적인 고민
- 다른 페이지에 사용할 때, layout component를 어떻게 분리할 것인지? : 컨텐츠 컨테이너만 각 페이지에 사용하고, 나머지는 전체 레이아웃으로 분리하는 것이 좋아보임
- 자식 container에 mx/my-auto 외 다른 좋은 방법이 있을지? : 고민해볼 것
- Navbar 같은 component가 한 쪽에 고정 시, 어떻게 나눌 것인지? : flex-1(flex-grow 차이점: flex-shrink 0/1 차이) 사용하는 것이 좋아보임
<details>
<summary>claude 답변</summary>

> 질문 : 이거에 대한 생각은 어때 `?@App.tsx` 를 보고 판단해줘.


현재 `App.tsx` 코드를 보고 README에 작성하신 고민사항들에 대해 분석해드리겠습니다.

## 1. **다른 페이지에 사용할 때, layout component를 어떻게 분리할 것인지?**

현재 코드를 보면 레이아웃 구조가 3단계로 되어 있습니다:

```76:82:src/App.tsx
	return (
		// 전체 화면 레이아웃
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-gray-400">
			{/* 페이지 컨테이너 (items-center, justify-center 시 overflow-x/y-auto 왼쪽/위쪽 시작점이 보이지 않음) */}
			<div className="flex h-full w-full flex-col">
				{/* 컨텐츠 컨테이너 (세로/가로 중앙 정렬 및 최소 너비 지정) */}
				<div className="mx-auto my-auto flex min-w-[71.7rem] flex-col items-center gap-y-[1rem]">
```

**제안:**
- **`CenteredLayout.tsx`** 같은 재사용 가능한 레이아웃 컴포넌트를 만드는 것이 좋습니다.
- 배경색, 최소 너비, 여백 등을 props로 받아 커스터마이징 가능하게 만들면 됩니다.
- 비즈니스 로직(스킬 선택)과 레이아웃을 분리하면 유지보수가 훨씬 쉬워집니다.

```typescript
// 예시
<CenteredLayout minWidth="71.7rem" bgColor="gray-400">
  <SkillSelector />
</CenteredLayout>
```

## 2. **자식 container에 mx/my-auto 외 다른 좋은 방법이 있을지?**

현재 방식(`mx-auto my-auto`)은 완벽히 유효하고 좋은 접근입니다! 

**대안들:**
- **Grid 방식**: `display: grid; place-items: center;` - 하지만 현재 방식이 더 직관적입니다.
- **Flexbox (부모에서)**: 부모에 `items-center justify-center`를 쓰면 overflow 문제가 생긴다고 주석에 적으셨는데, 이는 정확한 관찰입니다.

**현재 방식의 장점:**
- ✅ Overflow 스크롤이 정상 작동
- ✅ 컨텐츠가 작을 때 중앙 정렬
- ✅ 컨텐츠가 클 때 스크롤 가능
- ✅ 직관적이고 이해하기 쉬움

**결론**: 현재 방식(`mx-auto my-auto`)을 그대로 유지하는 것을 추천합니다.

## 3. **Navbar 같은 component가 한 쪽에 고정 시, 어떻게 나눌 것인지?**

이것이 가장 중요한 고민입니다. 현재 구조에서 Navbar를 추가한다면:

**옵션 A: 전체 레이아웃 구조 변경**
```tsx
<div className="h-screen flex flex-col">
  <Navbar /> {/* 고정 높이 */}
  <div className="flex-1 overflow-auto bg-gray-400">
    <div className="flex h-full w-full flex-col">
      <div className="mx-auto my-auto">
        {/* 컨텐츠 */}
      </div>
    </div>
  </div>
</div>
```

**옵션 B: 절대 위치 (fixed/sticky)**
```tsx
<div className="h-screen relative">
  <Navbar className="fixed top-0 left-0 right-0 z-50" />
  <div className="h-full pt-[navbar-height] overflow-auto">
    {/* 기존 레이아웃 */}
  </div>
</div>
```

**제안하는 최종 구조:**

```typescript
// RootLayout.tsx (재사용 가능한 레이아웃)
interface RootLayoutProps {
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  bgColor?: string;
}

// AppLayout.tsx (앱 전체 레이아웃)
// CenteredContentLayout.tsx (중앙 정렬 컨텐츠용)
// PageLayout.tsx (일반 페이지용)
```

## 📊 종합 의견

현재 코드는 **단일 페이지 기준으로는 매우 잘 작성**되어 있습니다. 하지만 확장성을 고려한다면:

1. **레이아웃 계층 분리** (Layout > Page > Feature > Component)
2. **컴포지션 패턴** 사용 (Layout 컴포넌트들을 조합)
3. **재사용 가능한 레이아웃 유틸리티** 만들기

가장 큰 질문은 "이 앱이 얼마나 복잡해질 것인가?"입니다. 단순한 프로젝트라면 현재 구조도 충분하지만, 여러 페이지가 생길 예정이라면 지금 레이아웃을 분리하는 것이 좋습니다.

</details>

