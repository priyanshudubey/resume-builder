import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";

// Register custom fonts
Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
});

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
  fontWeight: 700,
});

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
  fontWeight: 300,
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 5,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  contactItem: {
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  entryTitle: {
    fontWeight: 700,
    marginBottom: 2,
  },
  entrySubtitle: {
    fontWeight: 400,
    fontStyle: "italic",
    marginBottom: 2,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bullet: {
    width: 10,
  },
  bulletContent: {
    flex: 1,
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
});

const ResumePDF = ({ resumeData }) => {
  console.log("ResumePDF received props:", resumeData);

  if (!resumeData || Object.keys(resumeData).length === 0) {
    console.error("ResumePDF: No data received");
    return (
      <Document>
        <Page
          size="A4"
          style={styles.page}>
          <Text>Error: No resume data available</Text>
        </Page>
      </Document>
    );
  }

  const { personalDetails, skills, experiences, education } = resumeData;

  console.log("Parsed data in ResumePDF:", {
    personalDetails,
    skills,
    experiences,
    education,
  });

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((desc, idx) => (
        <View
          key={idx}
          style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletContent}>{desc}</Text>
        </View>
      ));
    } else if (typeof description === "string") {
      return (
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletContent}>{description}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalDetails?.name || "Your Name"}
          </Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>
              {personalDetails?.phone || "Your Phone"}
            </Text>
            <Text style={styles.contactItem}>
              {personalDetails?.email || "Your Email"}
            </Text>
            <Text style={styles.contactItem}>
              {personalDetails?.location || "Your Location"}
            </Text>
          </View>
          <View style={styles.contact}>
            {personalDetails?.githubLink && (
              <Link
                style={styles.link}
                src={personalDetails.githubLink}>
                <Text style={styles.contactItem}>GitHub</Text>
              </Link>
            )}
            {personalDetails?.linkedinLink && (
              <Link
                style={styles.link}
                src={personalDetails.linkedinLink}>
                <Text style={styles.contactItem}>LinkedIn</Text>
              </Link>
            )}
            {personalDetails?.website && (
              <Link
                style={styles.link}
                src={personalDetails.website}>
                <Text style={styles.contactItem}>Portfolio</Text>
              </Link>
            )}
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text>{skills?.length > 0 ? skills.join(" • ") : "Your Skills"}</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experiences?.map((exp, index) => (
            <View
              key={index}
              style={{ marginBottom: 10 }}>
              <Text style={styles.entryTitle}>
                {exp.position || "Position"}
              </Text>
              <Text style={styles.entrySubtitle}>
                {exp.company || "Company"} | {exp.dates || "Dates"}
              </Text>
              {renderDescription(exp.description)}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education?.map((edu, index) => (
            <View
              key={index}
              style={{ marginBottom: 5 }}>
              <Text style={styles.entryTitle}>{edu.grade || "Degree"}</Text>
              <Text style={styles.entrySubtitle}>
                {edu.institute || "Institute"} | {edu.startYear} -{" "}
                {edu.endYear || "Year"}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
