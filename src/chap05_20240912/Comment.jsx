import React from "react";

const styles = {

    wrapper : {
        margin : 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "2px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        margin: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
    },
    commentText:
        {
            color: "black",
            fontSize: 16,
        },
    linkText:
        {
            color: "black",
            fontSize: 16,
        }
};

function Comment(props)
{
    return(
      <div style={styles.wrapper}>
         <div style={styles.imageContainer}>
             <img style={styles.image}
             src={props.imageUrl}/>
         </div>
          <div style={styles.imageContainer}>
            <span style={styles.nameText}>{props.name}</span>
              <div style={styles.commentText}><a href={props.link} style={styles.linkText}>{props.comment}</a></div>
          </div>
      </div>
    );
}

export {Comment};