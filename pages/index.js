import React from "react";

const Index = () => <div>Index page</div>;

Index.getInitialProps = ({ ctx: { res } }) => {
	res.writeHead(302, {
		Location: "/login",
	});

	res.end();

	return {};
};

export default Index;
