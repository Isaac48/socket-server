
<<<<<<< HEAD
=======

>>>>>>> origin/master
import { Router, Request, Response } from 'express';

const router = Router();

<<<<<<< HEAD


router.get('/mensajes', ( req: Request, res: Response  ) => {

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });

});

router.post('/mensajes', ( req: Request, res: Response  ) => {
=======
router.get ('/mensajes', (req: Request, res: Response) =>{

    res.json({
        ok: true,
        mensaje: 'Soy el get!!'
    });
});

router.post ('/mensajes', (req: Request, res: Response) =>{
>>>>>>> origin/master

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    });
<<<<<<< HEAD

});


router.post('/mensajes/:id', ( req: Request, res: Response  ) => {
=======
});

router.post ('/mensajes/:id', (req: Request, res: Response) =>{
>>>>>>> origin/master

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
<<<<<<< HEAD

});



export default router;


=======
});

export default router;
>>>>>>> origin/master
