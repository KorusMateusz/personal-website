import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TechnologyListItem(props) {
  const { item } = props;
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant="h6"><FontAwesomeIcon icon={item.icon}/>&nbsp;&nbsp;{item.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {item.technologies.map((technology) => (<div>{technology}</div>))}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
export default TechnologyListItem;