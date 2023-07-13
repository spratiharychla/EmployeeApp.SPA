import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    buttonHeader : {
        borderRadius: "100px",
        fontFamily: "Poppins",
        backgroundColor:"#4DAA50",
        '&:hover':{
          backgroundColor:"#47A652",
        },
        color:"white",
        marginRight: "1.5rem",
      },
      buttonImp : {
        borderRadius: "100px !important" ,
        fontFamily: "Poppins !important",
        backgroundColor:"#805791 !important",
        '&:hover':{
          backgroundColor:"#805791 !important",
        },
        color:"white !important",
        marginLeft : "40% !Important",
        width: "200px !Important"
      },
      buttonLateral : {
        borderRadius: "100px",
        fontFamily:"Poppins",
        backgroundColor:"white",
        color:"#4DAA50",
        border:"1px solid #A6A6A6",
      },
      fontPoppins : {
        fontFamily: "Poppins"
      },
      fontFutura : {
        fontFamily: "Futura Std Book"
      },
      beaconShortcodePlaceholder : {
        color : "black"
      }
})

export default styles