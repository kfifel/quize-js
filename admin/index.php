<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0 ">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="shortcut icon" href="../assets/images/logo-top.png" type="image/x-icon">
  <link rel="stylesheet" href="../assets/style/sass/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  <title>Dashboard</title>
</head>
<body>
<div class="body-container">
  <header class="">
    <aside class="bg-color-2-50">
      <div class="">
        <img src="../assets/images/logo.png" alt="logo" class="logo">
      </div>
      <div class="nav-header">
        <ul>
          <li>
            <div><h3>Dashboard</h3></div>
          </li>
          <li>
            <div><h3>Management Question </h3></div>
          </li>
          <li>
            <div><h3>Management Choices </h3></div>
          </li>
        </ul>
      </div>
    </aside>
  </header>
  <div class="">
    <main>
      <div class="main-container">
        <div class="container bg-color-2-50"  style="width: 75vw">

            <div  class="header-question">
                <div>
                    <i class="fa fa-search"></i>
                    <input type="text" class="search-input" placeholder="Search">
                </div>
                <h1>Question</h1>
                <button class="btn btn-secondary" id="myBtn">Add new question</button>
            </div>
            <div class="bg-color-3-50 mt-4 scrollable" style="border-radius: 10px" >
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">

                    </tbody>
                </table>
            </div>

        </div>
      </div>
    </main>
  </div>
</div>

<div id="myModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Add New Question</h2>
        </div>
        <!-- The modal body -->
        <div class="modal-body">
            <div class="form-group">
                <form action="#">
                    <div class="form-group-item">
                        <label for="question">
                            <span class="text-red">*</span>Question :
                            <input type="text" name="question" id="question">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice1">
                            <span class="text-red">*</span>Choice 1 :
                            <input type="text" name="choice" id="choice1">
                            <input type="checkbox" id="checkboxChoice1" value="0">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice2">
                            <span class="text-red">*</span>Choice 2 :
                            <input type="text" name="choice" id="choice2">
                            <input type="checkbox" id="checkboxChoice2" value="1">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice3">
                            Choice 3 :
                            <input type="text" name="choice" id="choice3">
                            <input type="checkbox" id="checkboxChoice3" value="2">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice3">
                            Choice 4 :
                            <input type="text" name="choice" id="choice4">
                            <input type="checkbox" id="checkboxChoice4" value="3">
                        </label>
                    </div>
                </form>
                <span class="text-blue">checkbox is for the correct answers</span>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn cancel-btn" id="cancel-btn">Cancel</button>
            <button class="btn confirm-btn" id="confirm-btn">Confirm</button>
        </div>
    </div>
</div>

<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" ></script>
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="/admin/assets/js/main.admin.js"></script>
</body>
</html>