<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0 ">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="shortcut icon" href="../assets/images/logo-top.png" type="image/x-icon">
  <link rel="stylesheet" href="../assets/style/css/main.css">
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
          <li onclick="#">
            <div><h3>Dashboard</h3></div>
          </li>
          <li onclick="QuestionComponent()">
            <div><h3>Management Question </h3></div>
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
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Que signifie PHP?</td>
                        <td>
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
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
                            <input type="text" name="choice1" id="choice1">
                            <input type="checkbox" id="checkboxChoice1">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice2">
                            <span class="text-red">*</span>Choice 2 :
                            <input type="text" name="choice2" id="choice2">
                            <input type="checkbox" id="checkboxChoice2">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice3">
                            Choice 3 :
                            <input type="text" name="choice3" id="choice3">
                            <input type="checkbox" id="checkboxChoice3">
                        </label>
                    </div>

                    <div class="form-group-item">
                        <label for="choice3">
                            Choice 4 :
                            <input type="text" name="choice4" id="choice4">
                            <input type="checkbox" id="checkboxChoice4">
                        </label>
                    </div>
                </form>
                <span class="text-blue">checkbox is for the correct answers</span>
            </div>
        </div>
        <!-- The modal footer -->
        <div class="modal-footer">
            <!-- The cancel button -->
            <button class="btn cancel-btn" id="cancel-btn">Cancel</button>
            <!-- The confirm button -->
            <button class="btn confirm-btn" id="confirm-btn">Confirm</button>
        </div>
    </div>
</div>

<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" ></script>
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<script src="/admin/assets/js/main.admin.js"></script>
<script>
    var modal = document.getElementById("myModal");

    // Get the trigger element
    var btn = document.getElementById("myBtn");

    // Get the close button
    var close = document.getElementsByClassName("close")[0];


    btn.addEventListener('click', function() {
        modal.style.display = "block";
    })

    // When the user clicks the close button, close the modal
    close.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    var confirmBtn = document.getElementById("confirm-btn");
    var cancelBtn = document.getElementById("cancel-btn");
    confirmBtn.onclick = function() {
        modal.style.display = "none";
        confirmAction();
    }

    // When the user clicks the cancel button, close the modal and run the cancel function
    cancelBtn.onclick = function() {
        modal.style.display = "none";
        cancelAction();
    }

    // Add a function to confirm the action
    function confirmAction() {
        // Do something here to confirm the action
        alert("The action was confirmed!");
    }

    // Add a function to cancel the action
    function cancelAction() {
        // Do something here to cancel the action
        alert("The action was cancelled!");
    }
</script>
</body>
</html>