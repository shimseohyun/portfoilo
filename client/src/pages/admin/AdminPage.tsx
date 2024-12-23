// import usePostPortfolio from "@hooks/apis/usePostPortfolio";

const AdminPage = () => {
  // const { postPortfolio } = usePostPortfolio();
  const handlePostPortfolio = () => {
    // postPortfolio();
  };

  return (
    <div>
      <h1>어드민</h1>
      <button onClick={handlePostPortfolio}>포트폴리오 추가하기</button>
    </div>
  );
};

export default AdminPage;
