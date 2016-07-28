<!doctype html>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
<head>
	<title>Duty</title>
    <script type="text/javascript" src="./resources/javascript/jquery/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="./resources/javascript/jquery/jquery.cookie.js"></script>
    <script type="text/javascript" src="./resources/javascript/functionality/duty.js"></script>
    <script type="text/javascript" src="./resources/javascript/functionality/dutytrailInterfaceLoader.js"></script>

	<link rel="stylesheet" href="resources/css/normalize.css">
	<link href="./resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="./resources/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="./resources/javascript/components/source/bootstrap.min.js" />"></script>

    <link href="./resources/css/base.css" rel="stylesheet" type="text/css" />
    <link href="./resources/css/duty.css" rel="stylesheet" type="text/css" />
</head>

<body onload = getDutyList(1)>

    <!-- Page Content -->
    <a  name="duty"></a>
    <div class="content-section-a">
        <div class="container">
            Duty List

            <div id="dutyList" class="container"></div>

        </div>
    </div>

</body>