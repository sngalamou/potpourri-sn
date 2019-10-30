import java.io.*; 
import java.util.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Color;

class OvalDraw extends Oval {
    private Boolean drawOvalFilledRed; 
    public void setDrawOvalFilledRed() { drawOvalFilledRed = true; }
    public OvalDraw () {
        super(0,0,0,0);
        drawOvalFilledRed = false;
    }

    public OvalDraw(int positionXIn, int positionYIn, int widthIn, int heightIn) {
        super(positionXIn, positionYIn, widthIn, heightIn);
        drawOvalFilledRed = false;
    }
    
    public void paintComponent(Graphics g) {
        g.drawOval(getPositionX(), getPositionY(), getWidth(), getHeight());
        if (drawOvalFilledRed) {
            g.setColor(new Color((int)(Math.random() *255), (int)(Math.random() *255), (int)(Math.random() *255)));
            g.fillOval(getPositionX()+1, getPositionY()+1, getWidth()-2, getHeight()-2);
            g.setColor(Color.black);
        }
        
        System.out.format("OvalDraw.paintComponent(x=%d, y=%d, w=%d, h=%d)\n",
            getPositionX(), getPositionY(), getWidth(), getHeight());
    }

}

class Face extends OvalDraw {
    private OvalDraw Leye;
    private OvalDraw Reye;
    private Random rand = new Random();

    public Face () {
        super(0, 0, 0, 0);
        int positionXIn = (int)(Math.random() *250);
        int positionYIn = 60+(int)(Math.random() *650);
        int widthIn = 60+(int)(Math.random() *190); 
        int heightIn = 60+(int)(Math.random() *190);
        setPositionX(positionXIn);
        setPositionY(positionYIn);
        setWidth(widthIn);
        setHeight(heightIn);
        int eyeHeight = heightIn / 7;
        int eyeWidth = eyeHeight * 2;
        int eyePositionXL = positionXIn + (widthIn / 5) - (eyeWidth / 4);
        int eyePositionX = eyePositionXL + (widthIn / 2) - (eyeWidth / 10)- (eyeWidth / 10);
        int eyePositionY = positionYIn + (heightIn / 6) - (eyeHeight / 4);

        Leye = new OvalDraw(eyePositionXL, eyePositionY, eyeWidth, eyeHeight);
        Leye.setDrawOvalFilledRed();
        Reye = new OvalDraw(eyePositionX, eyePositionY, eyeWidth, eyeHeight);
        Reye.setDrawOvalFilledRed();
        System.out.println(Face.toString());
        
    }

    public Face(int positionXIn, int positionYIn, int widthIn, int heightIn) {
        super(positionXIn, positionYIn, widthIn, heightIn);

        int eyeHeight = heightIn / 7;
        int eyeWidth = eyeHeight * 2;
        int eyePositionXL = positionXIn + (widthIn / 5) - (eyeWidth / 4);
        int eyePositionX = eyePositionXL + (widthIn / 2) - (eyeWidth / 10)- (eyeWidth / 10);
        int eyePositionY = positionYIn + (heightIn / 6) - (eyeHeight / 4);

        Leye = new OvalDraw(eyePositionXL, eyePositionY, eyeWidth, eyeHeight);
        Leye.setDrawOvalFilledRed();
        Reye = new OvalDraw(eyePositionX, eyePositionY, eyeWidth, eyeHeight);
        Reye.setDrawOvalFilledRed();
    }
    

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Leye.paintComponent(g);
        Reye.paintComponent(g);
        g.setColor(new Color((int)(Math.random() *255), (int)(Math.random() *255), (int)(Math.random() *255)));
        int i = rand.nextInt(2);
        if ( i == 1) {
            g.drawArc(getPositionX()+(getHeight()/18), getPositionY()-(getHeight()/80), getWidth()-10, getHeight()-10, -45, -90);
        }
        else {
            g.drawArc(getPositionX(), getPositionY()+(getHeight()/2), getWidth()-10, getHeight()-10, 45, 90);
        }
        g.setColor(Color.black);
    }
}

class FacePanel extends JPanel {
    private ArrayList<Face> FaceList = new ArrayList<Face>();
    private Random rand = new Random();

    public FacePanel() {
        int i = 3 + rand.nextInt(7);
        if ( i == 3) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 4) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());

        }
        else if ( i == 5) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 6) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 7) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 8) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 9) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
        else if ( i == 10) {
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
            FaceList.add(new Face());
        }
    }    
    public void paintComponent(Graphics g) {
    super.paintComponent(g);
    for (int i = 0; i < FaceList.size(); i++) {
        (FaceList.get(i)).paintComponent(g);
        }
    }
}



public class sadCyclops {
    public static void main(String[] args) {
        System.out.println("Starting sadCyclops...");

        JFrame.setDefaultLookAndFeelDecorated(true);
        JFrame myFrame = new JFrame("Sad Cyclops FaceDraw");
        myFrame.setBounds(100,100,600,400);
        myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        

        FacePanel myFacePanel = new FacePanel();  
        myFrame.add(myFacePanel);
        myFrame.setVisible(true);



    }
}