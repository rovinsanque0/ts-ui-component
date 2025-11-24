<?php
require_once 'PhpRbac/autoload.php';  
if (!isset($g_page)) {
    $g_page = '';
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>

<ul id="menu">
    <li><a href="index.php" <?= ($g_page === 'index') ? "class='active'" : '' ?>>Home</a></li>
    <li><a href="create.php" <?= ($g_page === 'create') ? "class='active'" : '' ?>>New Post</a></li>

    <?php if (!isset($_SESSION['username'])): ?>
        <li><a href="login.php" <?= ($g_page === 'login') ? "class='active'" : '' ?>>Login</a></li>
        <li><a href="register.php" <?= ($g_page === 'register') ? "class='active'" : '' ?>>Register</a></li>
    <?php endif; ?>

    <?php if (isset($_SESSION['username'])): ?>
        <li><a href="logout.php" <?= ($g_page === 'logout') ? "class='active'" : '' ?>>Logout</a></li>
    <?php endif; ?>

    <li><a href="privacy.php" <?= ($g_page === 'privacy') ? "class='active'" : '' ?>>Privacy</a></li>
<?php } 
if (isset($_SESSION['username']) && $rbac->Users->hasRole($role_id, $_SESSION['userid'])){
?>
    <li><a href="admin.php" <?= ($g_page == 'admin') ? "class='active'" : '' ?>>Admin</a></li>
<?php
} 
?>


</ul>





