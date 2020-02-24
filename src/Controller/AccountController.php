<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AccountController extends AbstractController
{
    /**
     * @Route("/signin")
     */
    public function login()
    {
        return $this->render('home/signin.html.twig');
    }

    /**
     * @Route("/signup")
     */
    public function signup()
    {
        return $this->render('home/signup.html.twig');
    }
}
