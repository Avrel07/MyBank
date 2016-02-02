<?php

namespace UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Method("GET")
     */
    public function indexAction()
    {
        return $this->render('UserBundle:Default:index.html.twig');
    }
}
